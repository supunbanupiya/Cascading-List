namespace CascadingDDL.Models.DBEntities
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public State State { get; set; }
    }
}
