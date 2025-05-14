package controllers

import (
	"jobfinder/backend/config"
	"jobfinder/backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// POST /apply
func ApplyJob(c *gin.Context) {
	var input struct {
		JobID uint `json:"job_id"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input"})
		return
	}

	userIDVal, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "user not authenticated"})
		return
	}

	// ตรวจสอบว่า job มีจริง
	var job models.Job
	if err := config.DB.First(&job, input.JobID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "job not found"})
		return
	}

	// ตรวจสอบว่าเคยสมัครไปแล้วหรือยัง
	var existing models.Application
	if err := config.DB.Where("user_id = ? AND job_id = ?", userIDVal, input.JobID).First(&existing).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "already applied"})
		return
	}

	app := models.Application{
		UserID: userIDVal.(uint),
		JobID:  input.JobID,
		Status: "applied",
	}

	if err := config.DB.Create(&app).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to apply"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "applied successfully"})

}

// GET /applications
func GetApplications(c *gin.Context) {
	userIDVal, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	var apps []models.Application
	if err := config.DB.Where("user_id = ?", userIDVal).Find(&apps).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to fetch applications"})
		return
	}

	c.JSON(http.StatusOK, apps)

}
