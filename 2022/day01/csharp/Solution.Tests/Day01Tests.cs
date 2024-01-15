using Solution;
public class Day01Tests
{
    [Fact]
    public void PrintInput_WritesExpectedLines()
    {
        /* [Fact] */
        /* void PrintsInput() */
        /* { */
        /*     using var sw = new StringWriter(); */
        /*     Console.SetOut(sw); */
        /**/
        /*     string input = "line1\nline2"; */
        /*     Problem problem = new(input); */
        /*     problem.PrintInput(); */
        /**/
        /*     string result = sw.ToString().TrimEnd(); */
        /*     Assert.Equal("line1\nline2", result); */
        /* } */

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

        /* [Fact] */
        /* void SatisfiesPartOne() */
        /* { */
        /**/
        /*     Problem problem = new(testInput); */
        /*     int result = problem.Solve(); */
        /**/
        /*     Assert.Equal(24000, result); */
        /* } */
    }

    /* public async Task<string> GetApiData(string url, string sessionKey) */
    /* { */
    /*     using (var ) */
    /* } */
}
