package core_action1

import (
	"testing"
)

func TestCoreAction1(t *testing.T) {
	result := CoreAction1("works")
	if result != "CoreAction1 works" {
		t.Error("Expected CoreAction1 to append 'works'")
	}
}
