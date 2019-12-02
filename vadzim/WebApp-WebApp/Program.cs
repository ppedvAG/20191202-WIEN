using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WebApp_WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Build() f�hrt den Host mit angegebenen Argumenten aus. Das kann nur einmal ausgef�hrt werden.
            //Run() f�hrt die Anwendung aus und blockiert den Aufruf-Thread bis der Host runterl�uft.
            CreateHostBuilder(args).Build().Run();
        }

        // CreateHostBuilder ininitialisiert eine neue Instanz von HostBuilder
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
