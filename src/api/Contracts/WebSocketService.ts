export interface WebSocketService<T> {
  connect(url: string): void
  send(data: T): void
  close(): void
}
