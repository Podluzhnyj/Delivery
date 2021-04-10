using Microsoft.AspNetCore.Identity;

namespace WebApplication8.Models
{
    public class User : IdentityUser
    {
        public int Balance { get; set; }
        public string Number { get; internal set; }
    }
}