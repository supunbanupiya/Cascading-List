namespace CascadingDDL.Models.DBEntities
{
    public class State
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Country Country { get; set; }
    }
}
