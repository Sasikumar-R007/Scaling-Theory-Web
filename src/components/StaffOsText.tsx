import StaffOsTrademark from '@/components/StaffOsTrademark'

export default function StaffOsText() {
  return (
    <>
      StaffOS
      <StaffOsTrademark />
    </>
  )
}

export function renderWithStaffOs(text: string) {
  const parts = text.split(/(StaffOS)/g)

  return parts.map((part, index) =>
    part === 'StaffOS' ? <StaffOsText key={index} /> : part,
  )
}
