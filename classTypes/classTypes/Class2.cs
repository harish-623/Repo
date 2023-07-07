using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classTypes
{
    class X
    {
        public virtual void M()
        {

        }

    }
    class Y : X
    {
        public  sealed override void M()// sealed methods are not overide further derivied clasess
        {
            base.M();
        }
    }
    class Z : Y
    {
        // public override voide M()
       // {
           // base.M();
       // }
    }


    class Class2
    {
    }
}
