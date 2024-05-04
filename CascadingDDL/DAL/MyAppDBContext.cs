using CascadingDDL.Models.DBEntities;
using Microsoft.EntityFrameworkCore;

namespace CascadingDDL.DAL
{
    public class MyAppDBContext : DbContext
    {
        public MyAppDBContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Country> Country { get; set; }
        public DbSet<City> City { get; set; }
        public DbSet<State> State { get; set; }
    }
}
