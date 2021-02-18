using System.ComponentModel.DataAnnotations;

namespace WebApplication7.ViewModels
{
    public class OrderModel
    {
        [Required(ErrorMessage = "Не указаны ФИО")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Не указан адрес доставки")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Не указан контактный номер телефона")]
        public string ContactPhone { get; set; }
    }
}
