using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace WebApp_WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });
        }
    }
}
/*
 * Startup.ConfigureServices() 
Diese Methode wird von der Laufzeitumgebung aufgerufen. Benutzt wird diese Methode, um Services zum Container hinzuzufügen.
Mehr Infos darüber, wie man eine Anwendung konfiguriert: https://go.microsoft.com/fwlink/?LinkID=398940

IServiceCollection spezifiziert einen Kontrakt für eine Kollektion von Service-Descriptoren.

Startup.Configure()
Diese Methode wird von der Laufzeitumgebung aufgerufen. Benutzt wird diese Methode, um HTTP-Anfragen-Pipeline zu konfigurieren.

IApplicationBuilder definiert eine Klasse, die Mechanismen bereitstellt, um eine Anfragen-Pipeline für die Anwendung zu konfigurieren.

IWebHostEnvironment stellt Information über Web-Hosting-Umgebung bereit, in der die Anwendung läuft.

IsDevelopment() prüft, ob der Name der aktuellen Host-Umgebung Microsoft.Extenstions.Hosting.EnvironmentName.Development ist.

UseDeveloperExceptionPage() fängt ab synchron und asynchron Exception-Instanzen von der Pipeline und generiert HTML Fehler-Antworten.

UseRouting() fügt Microsoft.AspNetCore.Routing.EndpointRoutingMiddleware zum gegebenen IApplicationBuilder hinzu.

UseEndpoints() fügt Microsoft.AspNetCore.Routing.EndpointMiddleware zum gegebenen IApplicationBuilder hinzu mit Microsoft.AspNetCore.Routing.EndpointDataSource-Instanzen,
die von Microsoft.AspNetCore.Routing.IEndpointRouteBuilder configuriert wurden. EndpointMiddleware wird Endpoint ausführen, der mit aktueller Anfrage assoziiert ist.

IEndpointRouteBuilder.MapGet(string pattern, RequestDelegate requestDelegate) fügt Microsoft.AspNetCore.Routing.RouteEndpoint zum IEndpointRouteBuilder hinzu, der mit den HTTP GET Anfragen für die gegebenen Pattern entspricht.

HttpContext fasst alle HTTP-spezifischen Informationen über eine HTTP-Anfrage zusammen.

Response bekommt das HttpResponse-Objekt für die gegebene Anfrage.

HttpResponse representiert die ausgehende Seite von einer HTTP-Anfrage.

WriteAsync(text) schreibt den gegebenen Text in den Antwort-Body. Rückgabewert ist Task.

 * */
