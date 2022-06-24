current_graph = {"a": ["b", "c"],
                 "b": ["d"],
                 "c": ["e"],
                 "d": ["f"],
                 "e": [],
                 "f": []
                 }


def dfs_iterative(graph: dict, start):
    stack = [start]
    while len(stack) != 0:
        current = stack.pop()
        print(current)
        for item in graph.get(current):
            stack.append(item)


def dfs_recursive(graph: dict, start):
    current = start
    print(current)
    items = graph.get(current)
    for item in items:
        dfs_recursive(graph, item)


dfs_iterative(current_graph, "a")

# dfs_recursive(current_graph, "a")

from queue import Queue


def bfs_iterative(graph: dict, start):
    queue = Queue()
    queue.put(start)
    while not queue.empty():
        current = queue.get()
        print(current)

        for item in graph.get(current):
            queue.put(item)


# bfs_iterative(current_graph, "a")
