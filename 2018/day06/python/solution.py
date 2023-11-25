# My bounds check is bad
def part_one(input):
    tuples = get_coord_tuples(input.strip())
    bounds = {
        'x_min': float('inf'),
        'y_min': float('inf'),
        'x_max': float('-inf'),
        'y_max': float('-inf'),
    }
    distribution = {}
    ignore_list = set()

    for tuple in tuples:
        x, y = tuple

        if x < bounds["x_min"]:
            bounds["x_min"] = x
        if y < bounds["y_min"]:
            bounds["y_min"] = y
        if x > bounds["x_max"]:
            bounds["x_max"] = x
        if y > bounds["y_max"]:
            bounds["y_max"] = y

    # Hacky solution - increase the search area such that the
    # borders must contain infinitely scaling areas
    for y in range(bounds["y_min"] - 1, bounds["y_max"] + 2):
        for x in range(bounds["x_min"] - 1, bounds["x_max"] + 2):
            distances = [manhattan_distance((x, y), tuple) for tuple in tuples]
            min_distance = min(distances)
            min_index = distances.index(min_distance)

            if distances.count(min_distance) == 1:

                distribution[min_index] = distribution.get(min_index, 0) + 1

                if (
                    y == bounds["y_min"] - 1 or
                    y == bounds["y_max"] + 1 or
                    x == bounds["x_min"] - 1 or
                    x == bounds["x_max"] + 1
                ):
                    ignore_list.add(min_index)

    max_area = 0
    print(distribution)
    print(ignore_list)
    # for index in distribution:
    #     x, y = tuples[index]
    #
    #     if (
    #         x == bounds["x_min"] or
    #         x == bounds["x_max"] or
    #         y == bounds["y_min"] or
    #         y == bounds["y_max"]
    #     ):
    #         continue
    #     elif distribution[index] > max_area:
    #         max_area = distribution[index]

    for index in distribution:
        if index not in ignore_list and distribution[index] > max_area:
            max_area = distribution[index]

    return max_area


def get_coord_tuples(s):
    tuples = []
    for line in s.strip().splitlines():
        x, y = line.split(', ')
        tuples.append((int(x), int(y)))
    return tuples


def manhattan_distance(coords1, coords2):
    x1, y1 = coords1
    x2, y2 = coords2

    return abs(x2 - x1) + abs(y2 - y1)
