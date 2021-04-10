﻿namespace WebApplication8.Models
{
    public class Order
    {

        public int OrderId { get; set; }
        public string Login { get; set; } // имя фамилия покупателя
        public string Address { get; set; } // адрес покупателя
        public string ContactPhone { get; set; } // контактный телефон покупателя
        public User User { get; set; }
    }
}

