export default function TableRow({ selected, children, ...rest }) {
  return (
    <tr aria-selected={selected || undefined} {...rest}>
      {children}
    </tr>
  );
}
