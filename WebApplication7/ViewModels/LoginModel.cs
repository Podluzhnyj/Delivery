using System.ComponentModel.DataAnnotations;

namespace WebApplication7.ViewModels
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Не указана электронная почта")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
