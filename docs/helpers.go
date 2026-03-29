// Package helpers provides various helper functions for the devops-scripts project.
package helpers

import (
	"crypto/rand"
	"log"
	"math/big"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// GenerateRandomString returns a random string of the given length.
func GenerateRandomString(length int) string {
	charset := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	chars := make([]byte, length)
	for i := range chars {
		n, err := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		if err != nil {
			log.Fatal(err)
		}
		chars[i] = charset[n.Int64()]
	}
	return string(chars)
}

// GetEnvironmentVariable returns the value of the given environment variable.
func GetEnvironmentVariable(name string) string {
	value := os.Getenv(name)
	if value == "" {
		log.Fatalf("Environment variable %s not set.", name)
	}
	return value
}

// GetCurrentDirectory returns the absolute path of the current directory.
func GetCurrentDirectory() string {
	return filepath.Abs(filepath.Dir(filepath.Join(".", string(os.Args[0])))
}

// IsInDevMode returns true if the app is running in dev mode, false otherwise.
func IsInDevMode() bool {
	return strings.Contains(GetEnvironmentVariable("GOOS"), "darwin")
}

// GetTimestamp returns the current timestamp in seconds.
func GetTimestamp() int64 {
	return time.Now().Unix()
}