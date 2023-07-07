using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classTypes
{
    // abstract classes are declared using abstact keyword.
    // abstract classes are inherited but not instainted.
    abstract class Shape {
        public abstract void Area(); //abstract method
        public void Details()// Non abstract method
        {
            Console.WriteLine("Iam 2d shape");
        }
    }
    class Circle : Shape
    {
        public double r;

        public Circle(double r)
        {
            this.r = r;
        }

        public override void Area()
        {
            double result = (Math.PI * r * r);
            Console.WriteLine("area of circle:" + result);
        }
    }

    class Rectangle : Shape
    {
        public int l, w;
        public Rectangle(int l, int w)
        {
            this.l = l;
            this.w = w;

        }
        public override void Area()
        {
            int result = l * w;
            Console.WriteLine("Area of Rectangle" + result);
        }
    }

    class Class3
    {
        static void Main()
        {
            Shape s = null;
            Console.WriteLine("1.Rectangle");
            Console.WriteLine("2.circle");
            int op = int.Parse(Console.ReadLine());
            switch (op)
            {
                case 1:
                    s = new Circle(12);
                    s.Area();
                    s.Details();
                    break;
                case 2:
                    s = new Rectangle(12, 12);
                    s.Area();
                    s.Details();
                    break;


            }

        }
        }
    }
