using System.Reflection;
using Xunit.Abstractions;

namespace Solution.Tests
{
    public class Tests
    {
        private readonly ITestOutputHelper _output;
        private readonly string _year;
        private readonly string _day;

        public Tests(ITestOutputHelper output)
        {
            _output = output;
            _year = "2022";
            _day = "1";
        }

        [Fact]
        void SatisfiesPartOneExample()
        {
            string testInput = @"1000
2000
3000

4000

5000
6000

7000
8000
9000

10000";

            Problem problem = new(testInput);
            int result = problem.Solve();

            Assert.Equal(24000, result);
        }

        [Fact]
        async void SatisfiesPartOne()
        {
            string input = await GetInput();

            Problem problem = new(input);
            int result = problem.Solve();

            Assert.Equal(73211, result);
        }

        private string GetSession()
        {
            string envPath = "../../../../../../../.env";
            string assemblyDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string envDir = Path.Combine(assemblyDir, envPath);


            string[] envText = File.ReadAllText(envDir).Trim().Split("\n");
            string prefix = "AOC_SESSION=";
            /* _output.WriteLine("testing"); */
            /* _output.WriteLine(prefix.Length.ToString()); */
            foreach (string line in envText)
            {
                _output.WriteLine(line);
                if (line.StartsWith(prefix))
                {
                    return line.Substring(prefix.Length);
                }
            }

            _output.WriteLine("No environment var with the corresponding name found.");

            return "";
        }

        public async Task<string> GetInput()
        {
            string sessionKey = GetSession();

            using HttpClient client = new();
            client.DefaultRequestHeaders.Add("Cookie", "session=" + sessionKey);

            HttpResponseMessage response = await client.GetAsync($"https://adventofcode.com/{_year}/day/{_day}/input");
            return await response.Content.ReadAsStringAsync();
        }
    }
}
