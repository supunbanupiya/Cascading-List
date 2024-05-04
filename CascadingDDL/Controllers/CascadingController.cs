using CascadingDDL.DAL;
using CascadingDDL.Models.DBEntities;
using Microsoft.AspNetCore.Mvc;

namespace CascadingDDL.Controllers
{
    public class CascadingController : Controller
    {
        private MyAppDBContext _context;

        public CascadingController(MyAppDBContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
        public JsonResult GetCountries()
        {
            var countries = _context.Country.OrderBy(x => x.Name).ToList();
            return new JsonResult(countries);
        }
        public JsonResult GetStates(int id)
        {
            var states = _context.State.Where(x=>x.Country.Id ==id).OrderBy(x=>x.Name).ToList();
            return new JsonResult(states);
        }
        public JsonResult GetCities(int id)
        {
            var cities = _context.City.Where(x=>x.State.Id==id).OrderBy(x=>x.Name).ToList();    
            return new JsonResult(cities);
        }
    }
}
