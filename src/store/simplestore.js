/**
 * @file Простейшее реактивное хранилище значений между компонентами
 */
import { reactive } from 'vue'

export const state = reactive({ scrollY: 0 })
