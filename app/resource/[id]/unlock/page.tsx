import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unlock Resource - Chiloba Mwabu',
};

export default function UnlockResourcePage({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-24">
      <Card className="border-gray-800 bg-[#161B22] text-center">
        <CardHeader>
          <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-amber-400" />
          </div>
          <CardTitle>This resource requires premium access.</CardTitle>
          <CardDescription>
            To unlock this resource, complete the steps below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-left space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-sm font-semibold text-white">Chat with Mr. Chiloba on WhatsApp</h4>
                <p className="text-sm text-gray-400">Send a message to request access and make payment.</p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <a href="https://wa.me/260977230272" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Open WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-sm font-semibold text-white">Make Payment</h4>
                <p className="text-sm text-gray-400">Complete the payment to unlock premium resources.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-sm font-semibold text-white">Get Instant Access</h4>
                <p className="text-sm text-gray-400">After payment verification, the resource becomes downloadable.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <Button variant="gradient" className="w-full" asChild>
              <a href="https://wa.me/260977230272" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Mr. Chiloba
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}