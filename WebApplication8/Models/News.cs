using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Models
{
    public class News
    {
        public int Id { get; set; }
        public string About { get; set; }
        public string Text { get; set; }
        public DateTime DateTime { get; set; }
        public string Author { get; set; }

        public string Image { get; set; }

    }
}
