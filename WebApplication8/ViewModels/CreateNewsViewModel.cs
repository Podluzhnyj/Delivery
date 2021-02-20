using System;

namespace WebApplication8.ViewModels
{
    public class CreateNewsViewModel
    {

        public int Id { get; set; }
        public string About { get; set; }
        public string Text { get; set; }
        public DateTime DateTime { get; set; }
        public string Author { get; set; }

        public string Image { get; set; }

    }
}
