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

        public int Solve2()
        {
            List<int> totals = new();
            int currentElf = 0;

            foreach (string line in this._input)
            {
                if (int.TryParse(line, out int value))
                {
                    currentElf += value;
                }
                else
                {
                    totals.Add(currentElf);
                    currentElf = 0;
                }
            }

            /* Add final elf and sort list */
            totals.Add(currentElf);
            totals.Sort((a, b) => b.CompareTo(a));

            int top3 = 0;
            for (int i = 0; i < 3; i++)
            {
                top3 += totals[i];
            }
            return top3;
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
