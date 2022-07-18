import * as React from "react"

function ContactIcon(props) {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.071 12H9.93a.918.918 0 00-.929.91v18.18c0 .504.415.91.929.91H34.07a.918.918 0 00.929-.91V12.91a.918.918 0 00-.929-.91zm-1.16 3.148v14.806H11.089V15.149l-.8-.611 1.14-1.435 1.242.946h18.661l1.242-.946 1.14 1.435-.803.61zm-1.579-1.102L22 21.148l-9.332-7.102-1.242-.947-1.14 1.435.8.61L21 22.69a1.647 1.647 0 001.993 0l9.919-7.542.8-.611-1.14-1.435-1.239.944z"
        fill="#000"
      />
    </svg>
  )
}

export default ContactIcon
