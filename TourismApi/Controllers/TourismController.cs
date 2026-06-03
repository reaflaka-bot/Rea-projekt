using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace TourismApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourismController : ControllerBase
    {
        // Dummy data for demonstration
        private static readonly List<string> Restaurants = new List<string>
        {
            "Herbs & Honey Restaurant",
            "Seasons & Restaurant",
            "Sherep & Restaurant"
        };

        private static readonly List<string> Hotels = new List<string>
        {
            "Tufenkian Hostoric Hotel",
            "Courtyard Yerevan Hotel",
            "Marriot Hotel"
        };

        [HttpPost("book-tour")]
        public IActionResult BookTour([FromBody] BookingRequest bookingRequest)
        {
            // Simulate a booking request being processed
            if (bookingRequest == null)
            {
                return BadRequest("Booking request cannot be empty.");
            }

            // In a real application, here you would save the booking data to a database
            return Ok(new { message = "Booking successful", bookingRequest });
        }

        [HttpGet("destinations")]
        public IActionResult GetDestinations()
        {
            var destinations = new List<string> { "Armenia", "Singapore", "Japan" }; // Dummy data for demonstration
            return Ok(destinations);
        }

        [HttpGet("activities")]
        public IActionResult GetActivities()
        {
            var activities = new List<string>
            {
                "Day Trip To Khor Virap",
                "Day Trip To Lake Sevan",
                "Echmiadzin Cathedral",
                "Echmiadzin Churches",
                "Day Trip To Garni"
            };
            return Ok(activities);
        }

        [HttpGet("restaurants")]
        public IActionResult GetRestaurants()
        {
            return Ok(Restaurants);
        }

        [HttpGet("hotels")]
        public IActionResult GetHotels()
        {
            return Ok(Hotels);
        }
    }
}
