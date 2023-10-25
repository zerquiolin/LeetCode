interface ListNode {
  val: number;
  next: ListNode | null;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // If there is no hear
  if (!head) return null;
  // If k is 1, then return head
  if (k === 1) return head;

  // Define dummy node
  let group: ListNode | null = null;
  // Counter
  let counter = 1;
  // Result node
  let result: ListNode | null = null;
  // Tail node
  let tail: ListNode | null = null;

  // Traverse the list
  while (head) {
    // Save current group head
    if (!group) group = head;
    // Update head
    head = head.next;
    // Increment Counter
    counter++;

    if (counter === k && head) {
      // Save next node
      const dummy = head.next;
      // Isolate the group
      head.next = null;
      // Update head
      head = dummy;
      // Reverse the group
      const reversed = reverse(group);
      // Update result
      if (!tail) result = reversed.head;
      else tail.next = reversed.head;
      // Update tail
      tail = reversed.tail;
      // Reassign counter
      counter = 1;
      // Reassign group
      group = null;
    }
  }

  if (tail && group) tail.next = group;

  return result;
}

function reverse(node: ListNode | null): {
  head: ListNode;
  tail: ListNode;
} {
  let head: ListNode | null = null;
  let tail: ListNode | null = node;

  while (node) {
    const dummy = node.next;
    node.next = head;
    head = node;
    node = dummy;
  }

  return { head: head!, tail: tail! };
}

// How it works:
// - Define the variable that will hold the K-Length group (group)
// - Traverse the Linked List isolating the K-Length groups
// - Once the group is isolated, reverse it, update the result, tail, head and counter
// - The process is repeated for each K-Length group until the end of the list
// - If the while loop ends and there is still a group, it means that the group is not K-Length
// - So, we just need to append it to the tail
