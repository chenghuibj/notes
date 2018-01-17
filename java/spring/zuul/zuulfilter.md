```
@Component
public class AuthHeaderFilter extends ZuulFilter{
    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        RequestContext requestContext = RequestContext.getCurrentContext();
        requestContext.addZuulRequestHeader("X-AUTH-ID",authentication.getPrincipal().toString());
        return null;
    }
}


@RequestMapping(value = "/demo",method = RequestMethod.GET)
    public String demo(){
        String user = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest()
                .getHeader("X-AUTH-ID");
        System.out.println(user);
        return "demo";
    }

```