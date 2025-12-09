export interface Event {
  id: string
  title: string
  slug: string
  shortDescription: string
  longDescription: string
  posterUrl: string
  lastDate: string
  capacity: number | null
  fee: number | null
  feeDescription: string
  track: string
  qrPaymentRequired: boolean
  registrations?: boolean
}

export interface Registration {
  registrationId: string
  eventSlug: string
  eventTitle: string
  name: string
  email: string
  whatsapp: string
  college: string
  semester: string
  branch: string
  isIEEEMember: boolean
  paymentDone: boolean
  status: string
  createdAt: string
  updatedAt: string
  membershipGrade?: string
  membershipNumber?: string
  paymentScreenshotUrl?: string
}
