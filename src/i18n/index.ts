import { type Locale } from '../config/routes'
import { en } from './en'
import { pl, type Messages } from './pl'

export const messages: Record<Locale, Messages> = { pl, en }
