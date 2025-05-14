package models

import "gorm.io/gorm"

type Application struct {
	gorm.Model
	UserID uint
	JobID  uint
	Status string // e.g. "applied", "reviewed", "accepted", "rejected"
}
