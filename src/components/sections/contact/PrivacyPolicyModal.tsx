import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

const PrivacyPolicyModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b border-primary-950">プライバシーポリシー</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
      </DialogContent>
    </Dialog>
  )
};

export default PrivacyPolicyModal;
