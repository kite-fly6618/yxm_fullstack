package fib

import (
	"testing"
)

func TestFibList(t *testing.T) {
	// var a int = 1
	// var b int = 1
	// var {
	// 	a int = 1
	// 	b int = 1
	// }
	a := 1
	b := 2
	t.Log(a)
	for i := 0; i<5; i++ {
		t.Log(" ",b)
		tmp := a
		a = b
		b = tmp + a
	}
	
}

// 1,1,2,3,5,8 ....
