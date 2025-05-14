package models

import "gorm.io/gorm"

type Job struct {
	gorm.Model
	Title       string
	Description string
	Company     string
	Location    string
	PostedBy    uint
}
