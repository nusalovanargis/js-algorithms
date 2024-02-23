This solution seems to be a recursive approach to achieve this. It compares the values of the current nodes in list1 and list2 and recursively merges the rest of the lists. If either of the lists is empty, it returns the other list. Otherwise, it compares the values of the current nodes in list1 and list2. It chooses the smaller value and sets its next to the result of merging the rest of that list with the other list. This process continues until one of the lists becomes empty.

Time complexity: O(n)
Space complexity: O(n)

![mergedTwoLists](https://github.com/nusalovanargis/js-algorithms/assets/111175224/7864a6aa-d044-4a25-8192-e0acd1a8069a)
