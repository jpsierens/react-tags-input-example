# react-tags-input example

The app provides a ```handleTagInput``` callback prop. It fires each
time you enter a tag, and exposes the value to you. This way you can add
each tag to your state whenever its entered.

Same logic for ```HandleTagRemove``` for when tags are removed.

Try entering the same tag twice, it wont let you. If you WANT to have
duplicates, pass in the <code>allowDuplicates</code> prop.
