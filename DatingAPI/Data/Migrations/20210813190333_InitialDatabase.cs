using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingAPI.Data.Migrations
{
    public partial class InitialDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                   .Sql("INSERT INTO Users (UserName) Values ('Claude')");
            migrationBuilder
                  .Sql("INSERT INTO Users (UserName) Values ('Cavour')");
            migrationBuilder
                  .Sql("INSERT INTO Users (UserName) Values ('Myriam')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
              .Sql("DELETE FROM Users");
        }
    }
}
