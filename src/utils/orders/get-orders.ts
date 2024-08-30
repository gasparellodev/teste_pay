import { cache } from 'react'
import 'server-only'
 
export const preload = () => {
  void getOrders()
}
 
export const getOrders = cache(async () => {
    const res = await fetch(`https://dummyjson.com/products`)
    return res.json()
})