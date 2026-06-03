using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpPost("register")]
    public IActionResult Register([FromBody] UserDto user)
    {
        // Save to database (implement yourself)
        return Ok(new { message = "User registered!" });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto login)
    {
        // Validate user (implement yourself)
        return Ok(new { name = "John", email = "john@example.com", image = "/image/default-user.png" });
    }
}

public class UserDto
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class LoginDto
{
    public string Name { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
