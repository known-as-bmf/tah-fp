using System;
using System.Collections.Generic;
using System.Linq;

namespace CS
{
  class Program
  {

    static void Main(string[] args)
    {
      var lines = new List<string> { ".net", "node", "js" };

      var result = lines.Where(line => ".net".Equals(line))
        .Select(line => line + " is cool")
        .ToList();

      result.ForEach(Console.WriteLine);
    }

  }
}
