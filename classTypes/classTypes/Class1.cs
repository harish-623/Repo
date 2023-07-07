using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classTypes
{
    // 1.sealed classes are declared with sealed keyword
    // 2. sealed classes are not inherited
    // 3.sealed classes are instatied
    class A
    { 
        public void M1()
        {

        }
    }

     sealed class B:A
    {
        public void M2()
        { 

        }
    }
    class C
    {

    }

    class Class1
    {
        static void Main()
        {
            B obj = new B();
        }
    }
}
