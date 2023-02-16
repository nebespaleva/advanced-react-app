import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: {
    name: string
    message: string
  }
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: {
        name: '',
        message: ''
      }
    }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: {
        name: error.name,
        message: error.message
      }
    }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render (): ReactNode {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError) {
      return <Suspense fallback=''>
          <PageError error={error} />
      </Suspense>
    }

    return children
  }
}
