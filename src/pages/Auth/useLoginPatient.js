import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { loginPatient as loginPatientApi } from "../../services/apiAuth";

export function useLoginPatient() {
  const { mutate: loginPatient, isLoading } = useMutation({
    mutationFn: ({email, password}) => loginPatientApi({email, password}),
    onSuccess: () => {
      toast.success("You are logged in!");
    },
  });

  return { isLoading, loginPatient };
}



