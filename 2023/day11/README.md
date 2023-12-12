[Prompt](https://adventofcode.com/2023/day/11)

Thoughts:
    - I did part one the literal way, but not the clever way - which is probably what's required for part 2. 
    - Refactored it when doing part two, since the code for two works for one as well.
    - This is a great example of considering the **process** instead of the **data**. Trying to manipulate the structures here is inefficient - but if you consider what the change in structure *means* in terms of how we get the answer, we can skip that step, and all the structure manipulation that goes with it, entirely.
    - **Spoilers** we don't actually need to do the array mutation, and doing so doesn't scale - instead, we can just keep track of which indexes require us to add rows when calculating the distance.
