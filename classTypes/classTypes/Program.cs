using System;

namespace classTypes
{

    // static class can also have only static members
    // static class can not be inherited and insistated 
    // static class members can acess using class name
    static class Compute

    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(Compute.Add(12, 2));

        }
    }
}
