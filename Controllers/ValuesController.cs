using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopApp.API.Data;

namespace ShopApp.API.Controllers {
    [Route ("api/[controller]")]
    public class ValuesController : Controller {
        private readonly DataContext _context;
        public ValuesController (DataContext context) {
            this._context = context;

        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get () {
            var val = await _context.Values.ToListAsync();
            return Ok(val);
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public async Task<IActionResult> Get (int id) {
            var val = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(val);
        }

        // POST api/values
        [HttpPost]
        public void Post ([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }
    }
}