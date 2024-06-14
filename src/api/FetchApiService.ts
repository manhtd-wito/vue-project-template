import type { ApiService } from './Contracts/ApiService'

export class FetchApiService implements ApiService {
  async request<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Failed to ${options.method} data. Status: ${response.status} - ${response.statusText}`)
    }
    return await response.json()
  }

  async get<T>(url: string, params?: URLSearchParams | Record<string, string> | string[][]): Promise<T> {
    const queryParams = new URLSearchParams(params).toString()
    return this.request<T>(`${url}?${queryParams}`)
  }

  async post<T>(url: string, data: Record<string, string>): Promise<T> {
    return this.request<T>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  async put<T>(url: string, data: Record<string, string>): Promise<T> {
    return this.request<T>(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  async patch<T>(url: string, data: Record<string, string>): Promise<T> {
    return this.request<T>(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>(url, {
      method: 'DELETE',
    })
  }
}
