using Microsoft.EntityFrameworkCore;

namespace WebApplication7.Models
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }

        public UserContext(DbContextOptions<UserContext> options) 
            : base (options)
        {
            Database.EnsureCreated();
        }
    }
}
