using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classTypes
{
    class Sample<T>
    {
        public T a;
        public T b;
        public void M(T i, T j)
        {
            a = i;
            b = j;

            Console.WriteLine($"a:{a},b:{b}");
        }

    }


    class Class6

    {
        static void Main()
        {
            Sample<int> s = new Sample<int>();
            s.a = 10;
            s.b = 20;
            s.M(12, 23);
            Sample<string> b1 = new Sample<string>();
            b1.a = "ha";
            b1.b = "af";
            b1.M("ha","harish");
        }
    }
}
