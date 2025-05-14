package controllers

import (
	"jobfinder/backend/config"
	"jobfinder/backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// POST /jobs
func PostJob(c *gin.Context) {
	var input models.Job
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ดึง userID จาก JWT middleware
	userIDVal, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "user not found in context"})
		return
	}
	input.PostedBy = userIDVal.(uint)

	if err := config.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create job"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Job posted successfully", "job": input})
}

// GET /jobs
func GetJobs(c *gin.Context) {
	var jobs []models.Job
	if err := config.DB.Find(&jobs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch jobs"})
		return
	}

	c.JSON(http.StatusOK, jobs)

}
