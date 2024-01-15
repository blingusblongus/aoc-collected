namespace Solution
{
    public class Program
    {
        static void Main(string[] args)
        {
            Problem solution = new Problem("line1\nline2");

            solution.PrintInput();
        }

    }

    public class Problem
    {
        private readonly string[] _input;

        public Problem(string input)
        {
            _input = input.Trim().Split("\n");
        }

        public int Solve()
        {
            int mostCals = 0;
            int currentElf = 0;

            foreach (string line in this._input)
            {
                if (int.TryParse(line, out int value))
                {
                    currentElf += value;
                }
                else
                {
                    if (currentElf > mostCals)
                    {
                        mostCals = currentElf;
                    }
                    currentElf = 0;
                }
            }

            if (currentElf > mostCals)
            {
                mostCals = currentElf;
            }
            return mostCals;
        }


        public void PrintInput()
        {
            foreach (string str in this._input)
            {
                Console.WriteLine(str);
            }
        }
    }
}
